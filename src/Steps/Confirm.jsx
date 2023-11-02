import { useForm } from "react-hook-form";
import { useAppState } from "../State";
import { Form } from "../Forms/Form";
import { Section } from "../Forms/Section";
import { Button } from "../Forms/Button";
import { SectionRow } from "../Forms/Section";
import { BiSend } from "react-icons/bi";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  const getEmojisForRating = (rating) => {
    // Mapeie a quantidade de estrelas para emojis correspondentes
    switch (rating) {
      case 1:
        return "★";
      case 2:
        return "★★";
      case 3:
        return "★★★";
      case 4:
        return "★★★★";
      case 5:
        return "★★★★★";
      default:
        return "";
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <Section title="Dados Pessoais" url="/">
        <SectionRow>
          <div>Nome: {state.name}</div>
        </SectionRow>
        <SectionRow>
          <div>Email: {state.email}</div>
        </SectionRow>
        <SectionRow>
          <div>Telefone: {state.phone}</div>
        </SectionRow>
      </Section>
      <Section title="Comentário" url="/comment">
        <SectionRow>
          <div>Avaliação: <span className="star-icon">{getEmojisForRating(state.rating)}</span></div>
        </SectionRow>
        <SectionRow>
          <div>Comentário: {state.comment}</div>
        </SectionRow>
      </Section>
      <div className="button-row">
        <Button>Enviar <BiSend /></Button>
      </div>
    </Form>
  );
};
