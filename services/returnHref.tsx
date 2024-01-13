import { useRouter } from "next/router";

const router = useRouter();
export const returnHref = () => {
  return router.pathname;
};
