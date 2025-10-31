import { p as prisma } from './nitro/nitro-prerenderer.mjs';

async function getTopics() {
  return await prisma.topic.findMany();
}
async function getSeriesByTopicId(topicId) {
  return await prisma.series.findMany({
    where: {
      topicId: {
        equals: topicId
      }
    }
  });
}
async function getVideosByTopicId(topicId) {
  return await prisma.video.findMany({
    where: {
      topicId: {
        equals: topicId
      }
    }
  });
}
async function getTopicIdByName(topicName) {
  const res = await prisma.topic.findFirst(
    {
      where: {
        name: {
          equals: topicName
        }
      }
    }
  );
  return res;
}

export { getSeriesByTopicId as a, getVideosByTopicId as b, getTopics as c, getTopicIdByName as g };
//# sourceMappingURL=videoRepository.mjs.map
