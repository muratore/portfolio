export interface dataProps {
  id: string;
  cliente: string;
  nomeTrabalho: string;
  descricao: string;
  caminhoImage: string[];
  tipo: string;
}

const data: dataProps[] = [
  {
    id: "7e894ae9-b80d-48ed-81ff-31f3a8970b11",
    cliente: "Junta Comercial do Ceará",
    nomeTrabalho: "Revista Empreendedor Digital",
    descricao:
      "A revista Empreendedor Digital é uma publicação semestral digitalizada e editada pela coordenação de Comunicação do Convênio Redesim Conectada, formado por nove Juntas Comerciais e pelo Sebrae.",
    caminhoImage: ["JUCECcover.jpg", "JUCECpag-8-9.jpg", "JUCECpag-36-37.jpg"],
    tipo: "Editorial",
  },
 
  {
    id: "79af98aa-68fa-463f-b54a-898417606836",
    cliente: "Agência SGPropag",
    nomeTrabalho: "Livro CDL Fortaleza 55 Anos - Tempo e Memória",
    descricao: `O livro "Tempo de Memória - C D L Fortaleza - 55 Anos" é uma publicação comemorativa dos 55 anos da Câmara de Dirigentes e Lojistas de Fortaleza. Ele detalha a história da entidade e sua relação com o comércio da cidade, apresentando fotografias e ilustrações.`,
    caminhoImage: [
      "cdl-0-1920px.jpg",
      "cdl-1-1920px.jpg",
      "cdl-2-1920px.jpg",
      "cdl-3-1920px.jpg",
    ],
    tipo: "Editorial",
  },
  {
    id: "cad04af9-0ffd-4162-a0b0-613446432fba",
    cliente: "Fundação Demócrito Rocha",
    nomeTrabalho: "Livro Coopercon 20 Anos",
    descricao: `Duas décadas fazendo de cada projeto uma experiência inesquecível. Assim é a história da Cooperativa da Construção Civil do Ceará (Coopercon-CE), pioneira no Brasil, que reúne grandes parcerias e clientes no setor imobiliário do Estado. Em sua trajetória, foram grandes as mudanças, com adequação às necessidades do mercado que se modernizou e que busca cada vez mais economia e eficiência, tendo como base a integração, inovação, sustentabilidade e educação com a sociedade. `,
    caminhoImage: [
      "coopercon-0-1500px.jpg",
      "coopercon-1-1500px.jpg",
      "coopercon-2-1500px.jpg",
      "coopercon-3-1500px.jpg",
      "coopercon-4-1500px.jpg",
    ],
    tipo: "Editorial",
  },
  {
    id: '5f757308-e61b-4bee-8ec0-77422aab57d6',
    cliente: "Governo do Estado do Ceará",
    nomeTrabalho: "Portfolio do Governo do Estado do Ceará",
    descricao: `Este livro é um prospecto de investimento cuidadosamente elaborado, destacando o vasto potencial do Ceará. Ele aborda desde a diversidade econômica e riqueza mineral do estado até o apelo turístico de suas paisagens, como a "Terra da Luz", e o dinamismo de Fortaleza, sua capital. Com um design moderno e fotos impactantes, o material convida a investimentos, mostrando por que o Ceará é um destino promissor com "bons ventos" para negócios e turismo. `,
    caminhoImage: [
      "ceara-0.jpg",
      "ceara-1.jpg",
      "ceara-2.jpg",
      "ceara-3.jpg",
      "ceara-4.jpg",
      "ceara-5.jpg",
      "ceara-6.jpg",
      "ceara-7.jpg",
      "ceara-8.jpg",
    ],
    tipo: "Editorial",
  },
  {
    id: '9970fb2a-eb01-46e4-a5c8-93c03f1a8a21',
    cliente: "Fecomércio Senac",
    nomeTrabalho: "Portfolio do Governo do Estado do Ceará",
    descricao: `O "Repertório de Sabores" do Senac destaca-se como uma primorosa coletânea editorial, reunindo 28 receitas que são verdadeiras joias da culinária regional brasileira. Através de um design pensado para a gastronomia, o livro não apenas apresenta os pratos das Semanas da Gastronomia Regional, mas também ressalta a alma e a sabedoria de 16 estados, como Alagoas, Ceará e Minas Gerais. Sua estrutura editorial permite que a obra resgate tradições culinárias e, ao mesmo tempo, celebre a reinvenção com criatividade e novas técnicas, transformando cada página em uma experiência que harmoniza sabor, história e cultura. `,
    caminhoImage: [
  "Sabores-0.jpg",
  "Sabores-1.jpg",
  "Sabores-2.jpg",
  "Sabores-3.jpg",
  "Sabores-4.jpg",
  "Sabores-5.jpg",
  "Sabores-6.jpg"
],
    tipo: "Editorial",
  },
  {
    id: '3110db58-d1c1-493c-8c10-94c42f7f8fa7',
    cliente: "Assembleia Legislativa do Estado do Ceará",
    nomeTrabalho: "Revista Plenário - Edição 69",
    descricao: `O design editorial utiliza tipografia impactante para os títulos e uma forte conexão visual com as reportagens através de fotografias. As páginas apresentam um layout limpo, com destaque para as imagens e citações, proporcionando uma leitura engajante e informativa. Além do foco na questão da terra, a revista também destaca a resistência e a cultura do povo quilombola, como evidenciado no lançamento do documentário "Cumbe - Resistência e Afirmação". A publicação da Alece busca, assim, contribuir para o reconhecimento e a valorização da história e da luta dos quilombolas no Ceará.  `,
    caminhoImage: [
  "Plenario-ed-69-0.jpg",
  "Plenario-ed-69.jpg",
  "Plenario-ed-69-3.jpg",
  "Plenario-ed-69-2.jpg",
],
    tipo: "Editorial",
  },
];

export default data;
