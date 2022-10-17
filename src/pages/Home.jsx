import React from "react";
import Layout from "../components/ui/Layout";
import WritingForm from "../components/WritingForm";
import FeedList from "../components/FeedList";

const Home = () => {
  return(
    <Layout>
      <WritingForm />
      <FeedList />
    </Layout>
  )
}

export default Home;
