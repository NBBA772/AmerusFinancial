import { u as useRuntimeConfig, x as getSubscriptionById, y as getUserByStripeCustomerId, z as updateSubscription, A as createSubscription } from './nitro/node-server.mjs';
import Stripe from 'stripe';

async function createGHLContact(data) {
  console.log(data);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `${process.env.GHL_API_KEY}`);
  var raw = JSON.stringify({
    "firstName": data.firstName,
    "lastName": data.lastName,
    "email": data.email,
    "phone": data.phone,
    tags: [
      "newClient"
    ]
  });
  fetch("https://rest.gohighlevel.com/v1/contacts/", {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.log("error", error));
}

const config = useRuntimeConfig();
const stripe = new Stripe(config.private.stripeSecretKey, null);
async function getSubscribeUrl(lookupKey, user) {
  const customerEmail = user.email;
  const price = await stripe.prices.retrieve(
    lookupKey
  );
  let shouldUpdateUser = false;
  if (!user.stripeCustomerId) {
    shouldUpdateUser = true;
    const customer = await stripe.customers.create({ email: customerEmail });
    user.stripeCustomerId = customer.id;
  }
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    line_items: [
      {
        price: price.id,
        quantity: 1
      }
    ],
    mode: "subscription",
    success_url: `${config.public.appDomain}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.public.appDomain}/subscribe/cancel`,
    customer: user.stripeCustomerId
  });
  return { url: session.url, user, shouldUpdateUser };
}
async function handleSubscriptionChange(subscription, lastEventDate) {
  const localSubscription = await getSubscriptionById(subscription.id);
  if (localSubscription?.lastEventDate > lastEventDate) {
    return true;
  }
  const stripeCustomerId = subscription.customer;
  const user = await getUserByStripeCustomerId(stripeCustomerId);
  const data = {
    userId: user.id,
    name: subscription.id,
    stripeId: subscription.id,
    stripeStatus: subscription.status,
    stripePriceId: subscription.items.data[0].price.id,
    quantity: subscription.description,
    trialEndsAt: subscription.trial_end,
    endsAt: subscription.ended_at,
    startDate: subscription.start_date,
    lastEventDate
  };
  await updateSubscription(data);
  await createGHLContact(user);
  return true;
}
async function handleSubscriptionCreate(subscription, lastEventDate) {
  const localSubscription = await getSubscriptionById(subscription.id);
  if (localSubscription?.lastEventDate > lastEventDate) {
    return true;
  }
  const stripeCustomerId = subscription.customer;
  const user = await getUserByStripeCustomerId(stripeCustomerId);
  const data = {
    userId: user.id,
    name: subscription.id,
    stripeId: subscription.id,
    stripeStatus: subscription.status,
    stripePriceId: subscription.items.data[0].price.id,
    quantity: subscription.description,
    trialEndsAt: subscription.trial_end,
    endsAt: subscription.ended_at,
    startDate: subscription.start_date,
    lastEventDate
  };
  await createSubscription(data);
  return true;
}

export { handleSubscriptionCreate as a, getSubscribeUrl as g, handleSubscriptionChange as h };
//# sourceMappingURL=stripeService.mjs.map
