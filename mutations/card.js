import { gql } from "@apollo/client";

export const CREATE_CARD = gql('mutation{createCard(createCardInput:{url:"sas",alt:"fish",date:"22 мая 2022 года"})')