import React from 'react';
import { Container } from './styles';
import { CommentCard } from '../../components/CommentCard';

export const MainContent = () => {

  const paragrafo1 = 'Hey not too early I sleep in Sundays, hey McFly, youre shoes untied, dont be so gullible, McFly. Save the clock tower. So whats it to you, butthead.You know you ve been looking for a, since you re new here, I m gonna cut you a break, today.';
  const paragrafo2 = 'How did I ever expect to get back, one pallet one trip I must be out of my mind. What is it Einy? Oh my god, they found me, I dont know how but they found me. ';
  const paragrafo3 = ' Run for it, Marty. Wait a minute, wait a minute. 1:15 in the morning? Oh, I sure like her, Marty.';
  const paragrafo = 'Uh, stories, science fiction stories, about visitors coming down to Earth from another planet. Yeah, its 8: 00.Right.Lou, gimme a milk, chocolate.Lorraine, my density has popped me to you.';
  const paragrafo4 = 'Inflammable means flammable? What a country. Thank you, steal again. Please do not offer my god a peanut. I didnt get rich by signing checks.Oh, everything looks bad if you remember it.';
  const paragrafo5 = 'Kids, kids. Im not going to die.That only happens to bad people.Facts are meaningless.You could use facts to prove anything thats even remotely true! ';
  const paragrafo6 = 'Marge, you being a cop makes you the man! Which makes me the woman — and I have no interest in that, besides occasionally wearing the underwear, which as we discussed, is strictly a comfort thing.';
  const paragrafo7 = 'How could you?! Havent you learned anything from that guy who gives those sermons at church?Captain Whatshisname?We live in a society of laws! Why do you think I took you to all those Police Academy movies ? For fun ?';
  //const tweets = useListarTweets();

  const tweets = [
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo7 },
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo4 },
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo5 },
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo1 },
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo2 },
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo3 },
    { 'name': 'teste', 'text': paragrafo5, 'comentario': paragrafo6 },
  ];

  return (
    <Container id="main-content">
      {
        tweets && (
          tweets.map(item => (
            <CommentCard key={item.name} titulo={item.name} texto={item.text} comentario={item.comentario} hashtags="hashtags" />
          ))
        )
      }
    </Container>

  );
};