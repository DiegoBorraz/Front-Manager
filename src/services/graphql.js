import React, { useState } from "react";
//graphql
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const EXCHANGE_RATES = gql`
  query User($id: Int!) {
    fetchUser(id: $id) {
      id
      name
      password
      email
      dateOfBirth
    }
  }
`;
export const getUser = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { id: id },
  });
  console.log("DATA == ", data);

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return data;
};
