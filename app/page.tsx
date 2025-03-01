import FeaturedPost from "@/components/FeaturedPost";
import PopularPost from "@/components/PopularPost";
import RecentPost from "@/components/RecentPost";

export default function Home() {
  return (
    <div>
      <FeaturedPost />
      <PopularPost />
      <RecentPost />
    </div>
  )
}
