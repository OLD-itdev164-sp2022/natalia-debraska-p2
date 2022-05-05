import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Heading } from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Grid = styled(Box)`
  	box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Miriam Goncalves</h1>
    <p>Meu nome é Miriam, sou professora aposentada. No inicio da minha aposentadoria,
    me deparei com o tempo que não tinha, o tempo estava ao meu dispor sem cobrar horario, 
    eu podia fazer o que quisesse dele. Confesso que fiquei muito feliz, e buscava preenche-lo 
    de maneira que sentisse que minha vida estava mudando para melhor. </p>
    <p>Veio a pandemia e me vi presa em casa, sem ter o que fazer. Foi então que percebi que minhas
    paredes brancas estavam sujas e sem vida.</p>
    <p>Por que não pinta-las? Pintei-as, pintei tambem janelas e portas... Mas tudo estava branco, 
    eu queria cores, resolvi entao pintar os armarios, pintei até o piso da cozinha. (Cabinet, Wardrobe) </p>
    <p>Não tendo mais o que pintar e ja sentindo falta do prazer que me dava a pintura, resolvi 
    pintar uma tela.</p>
    <p>Fui para internet e reproduzi essa tela que foi minha primeira pintura. (First)</p>
    <p>Não queria parar e continuei minha busca.</p>
    <p>Encontrei então um professor maravilhoso, Amaury Jr, quer generosamente repartia seu talento
    com pessoas que como eu buscavam uma forma de colorir a vida. Seguindo seus ensinamentos pintei essas 
    outras telas. (Pathway, Mountain, Ice Mountain)</p>
    <p>Agora como sua aluna acredito estar evoluindo na pintura, pintei estas outras telas.</p>
    <p>Me encontro agora em um mundo colorido e envolvente de artistas que repartem com entusiasmo
    seus talentos e espero com o tempo que agora tenho, crescer como pintora.</p>
    <p>Disponibilizarei aqui meus trabalhos para que voces acompanhem e convido aqueles que quiserem
    entrar nesse mundo colorido e prazeroso que me acompanhe.</p>
    <p>Este é meu ultimo trabalho ainda em andamento.</p>
    
  
    <Grid>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <Card key={edge.node.id} width={256} p={3}>
          <Link to={edge.node.slug}>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              alt="heroImage"
            />
          </Link>
          <Heading>{edge.node.title}</Heading>         
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
        </Card>
      ))
    }
    </Grid>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
            )
          }
        }
      }
    }
  }
`
