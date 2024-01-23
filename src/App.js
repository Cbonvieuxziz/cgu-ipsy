import './App.css';
import { Title, SubTitle, ArticleTitle, Text } from './components/texts';

import logo from './medias/img/logo.png'
import { content } from './locales/fr';

function App() {
  return (
    <div className='mx-36 my-20'>

      <div className='flex flex-row w-full items-center mb-24'>
        <img src={logo} alt="Logo" className='w-20 aspect-square rounded-lg mr-6'/>
        <Title className={"flex-1"}>
          iPsy
        </Title>

        <SubTitle>
          En vigueur au 23/01/2024
        </SubTitle>
      </div>

      <Title className={"text-center mb-24"}>
        Conditions générales d'utilisation
      </Title>      

      <Text className={'mt-10'}>
        Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
        des modalités de mise à disposition de l'application et des services par Antonin MOREL--FILLON et de définir les
        conditions d’accès et d’utilisation des services par « l'Utilisateur ».
      </Text>
      
      <Text className={'mt-4'}>
        Les présentes CGU sont accessibles sur l'application à la rubrique «CGU».
      </Text>

      {content.map((article) => (
        <div key={article.id}>
          <ArticleTitle> {article.title} </ArticleTitle>
          {article.paragraphs.map((item) => <Text key={item.id}>{item.content}</Text>)}
        </div>
      ))}
    </div>
  );
}

export default App;
