import { permanentRedirect } from "next/navigation";
import { seoRoutes } from "@/lib/site";

export default function BlogRootPage() {
  permanentRedirect(seoRoutes.nlBlog);
}
