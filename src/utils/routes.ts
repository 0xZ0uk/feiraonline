export type Route = {
  name: string;
  link: string;
  description?: string;
  toggled?: boolean;
  subroutes?: Route[];
};

export const routes: Route[] = [
  {
    name: "Página Inicial",
    link: "/",
  },
  {
    name: "Produtos",
    link: "/produtos",
    toggled: true,
    subroutes: [
      {
        name: "Frutas e Legumes",
        link: "/produtos/frutas-legumes",
        description: "Produtos frescos selecionados diariamente.",
      },
      {
        name: "Peixaria",
        link: "/produtos/peixaria",
        description: "Peixes frescos selecionados diariamente.",
      },
      {
        name: "Talho",
        link: "/produtos/talho",
        description: "Carnes frescas selecionadas diariamente.",
      },
      {
        name: "Ovos e Latícinios",
        link: "/produtos/ovos-laticinios",
        description: "Ovos frescos e laticínios selecionados.",
      },
      {
        name: "Charcutaria",
        link: "/produtos/charcutaria",
        description: "Seleção de charcutaria fresca e artesanal.",
      },
      {
        name: "Queijos",
        link: "/produtos/queijos",
        description: "Queijos selecionados e frescos.",
      },
      {
        name: "Padaria e Pastelaria",
        link: "/produtos/padaria-pastelaria",
        description: "Pães, bolos e doces preparados diariamente.",
      },
      {
        name: "Vegan",
        link: "/produtos/vegan",
        description: "Opções veganas frescas e saudáveis.",
      },
      {
        name: "Artesanato",
        link: "/produtos/artesanato",
        description: "Artesanato único e criativo.",
      },
    ],
  },
  {
    name: "Feiras",
    link: "/feiras",
  },
  {
    name: "Receitas",
    link: "/receitas",
  },
  {
    name: "Suporte",
    link: "/suporte",
  },
];
