import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import PopularTourThree from "@/components/PopularTours/PopularToursThree";

import React from "react";

const Tours = () => {
  return (
    <Layout pageTitle="Tours">
      <PageHeader title="Popular Tours" page="Tours" />
      <PopularTourThree toursPage />


    </Layout>
  );
};

export default Tours;
