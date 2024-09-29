import React, { useEffect } from "react";
import { NextPage } from "next";
import CreateNote from "../../components/home/components/create-note";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const { ID } = router.query;
  const noteId = Array.isArray(ID) ? ID[0] : ID || '';
  

  return <CreateNote noteId={noteId} />;
};

export default Index;
