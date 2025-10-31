<template>
  <div>
    <div class="px-4 mb-8 md:block">
      <MultiStepForm />
    </div>
  </div>
</template>

<script>
import MultiStepForm from '../sections/HomePage/MultiStepForm.vue';

export default {
  props: {
    tag: {
      type: String,
      default: "newClient", // Default tag if not provided
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      tags: [],
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Create contact
        await this.createContact();
        // Reset form fields or show success message
        this.resetForm();
        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    async createContact() {
      try {
        const config = useRuntimeConfig();
        // console.log(config.public.GHL_API_KEY);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);

        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phoneNumber,
          tags: [this.tag],
        };

        const raw = JSON.stringify(data);

        const response = await fetch(
          "https://rest.gohighlevel.com/v1/contacts/",
          {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create contact");
        }

        const contact = await response.json();
        console.log("Created contact:", contact); // Log the contact object

        return contact; // Return the contact object
      } catch (error) {
        console.error("Error creating contact:", error);
        throw error;
      }
    },
    resetForm() {
      // Reset form fields here
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "";
      this.tags = [];
    },
  },
};
</script>
