import React from "react";
// import PostCard from "../components/PostCard";
import SearchSection from "../components/homepage/SearchSection";
import PostModal from "../components/modal/PostModal";
import DeleteModal from "../components/modal/DeleteModal";
import axios from "axios";
import PostCard from "../components/PostCard";
import { Post } from "../types";

// Mock data for posts
// const mockPosts = [
//   {
//     title: "The Beginning of the End of the World",
//     categoryId: "history",
//     description:
//       "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end.",
//     commentCount: 32,
//   },
//   {
//     title: "Exploring the Depths of the Ocean",
//     categoryId: "science",
//     description:
//       "The ocean holds mysteries that we have only begun to understand. From the deepest trenches to the most vibrant coral reefs, the underwater world is teeming with life and secrets.",
//     commentCount: 15,
//   },
//   {
//     title: "The Rise of Artificial Intelligence",
//     categoryId: "technology",
//     description:
//       "Artificial intelligence is no longer a concept of science fiction. With advancements in machine learning and neural networks, AI is becoming an integral part of our daily lives, revolutionizing industries across the globe.",
//     commentCount: 45,
//   },
//   {
//     title: "A Journey Through Space Exploration",
//     categoryId: "space",
//     description:
//       "Space exploration has come a long way since the first moon landing. Today, we are exploring distant planets, studying asteroids, and sending rovers to the surface of Mars.",
//     commentCount: 25,
//   },
//   {
//     title: "The Future of Renewable Energy",
//     categoryId: "environment",
//     description:
//       "As the world faces the challenges of climate change, renewable energy sources like solar and wind power are becoming increasingly important in the fight for a sustainable future.",
//     commentCount: 10,
//   },
//   {
//     title: "The Impact of Social Media on Society",
//     categoryId: "society",
//     description:
//       "Social media has transformed the way we communicate, share information, and connect with others. But what is the true impact of social media on society, and how is it shaping our future?",
//     commentCount: 60,
//   },
//   {
//     title: "The Evolution of Human Civilization",
//     categoryId: "history",
//     description:
//       "From the rise of ancient civilizations to the modern world, the evolution of human society is a fascinating journey of cultural, technological, and political change.",
//     commentCount: 30,
//   },
//   {
//     title: "Understanding Quantum Mechanics",
//     categoryId: "science",
//     description:
//       "Quantum mechanics is a fundamental theory in physics that describes nature at the smallest scales. It challenges our classical understanding of the universe and opens up new possibilities for technology and discovery.",
//     commentCount: 22,
//   },
//   {
//     title: "The Art of Mindfulness and Meditation",
//     categoryId: "wellness",
//     description:
//       "Mindfulness and meditation are practices that help individuals cultivate awareness, reduce stress, and improve mental well-being. These ancient techniques are gaining popularity in the modern world.",
//     commentCount: 12,
//   },
//   {
//     title: "The Power of Creativity in Problem Solving",
//     categoryId: "creativity",
//     description:
//       "Creativity is not just about making art; it’s a powerful tool for problem-solving. By thinking outside the box and approaching challenges with a creative mindset, we can find innovative solutions.",
//     commentCount: 18,
//   },
// ];

async function fetchPosts(category: string): Promise<Post[]> {
  try {
    const response = await axios.get(`http://localhost:8000/posts?category=${category}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const Page = async ({ searchParams }: { searchParams: { category: string } }) => {
  const category = searchParams.category || "";
  const posts = await fetchPosts(category);

  return (
    <div className="w-[343px] md:w-[698px] xl:w-[798px] mx-auto py-8 xl:pt-8">
      <SearchSection />
      <div className="rounded-t-2xl overflow-y-scroll xl:h-[80vh]">
        {posts.map((post) => (
          <PostCard canEdit={true} key={post.id} post={post} />
        ))}
      </div>
      <PostModal />
      <DeleteModal />
    </div>
  );
};

export default Page;