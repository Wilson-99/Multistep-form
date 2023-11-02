import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useAppState } from "../State";
import { Form } from "../Forms/Form";
import { Field } from "../Forms/Field"
import { Button } from "../Forms/Button"
import { Input } from "../Forms/Input"
import { BiRightArrowAlt } from "react-icons/bi"
import { Validations } from "../Forms/Validations";

export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit", resolver: yupResolver(Validations) });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/comment");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <Field label="Nome" error={errors?.name}>
          <Input
            {...register("name")}
            id="name"
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email")}
            type="email"
            id="email" placeholder="example@mail.com"
          />
        </Field>
        <Field label="Telefone" error={errors?.phone}>
          <Input
            {...register("phone")}
            type="number"
            id="phone" placeholder="9999999"
          />
        </Field>
        <div className="button-row">
        <Button>Proximo <BiRightArrowAlt /></Button>
        </div>
    </Form>
  );
};