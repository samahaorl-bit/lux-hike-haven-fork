import { permanentRedirect } from "next/navigation";
import { seoRoutes } from "@/lib/site";

export default function EnglishRootPage() {
  permanentRedirect(seoRoutes.enHub);
}
