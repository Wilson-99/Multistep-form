import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../State";
import { Form } from "../Forms/Form";
import { Field } from "../Forms/Field";
import { Button } from "../Forms/Button";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { StarRating } from "../Forms/StarRating"; 

export const Comment = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const [rating, setRating] = useState(state.rating || 0);
  const [feedback, setFeedback] = useState(getFeedbackMessage(rating));

  const saveData = (data) => {
    setState({ ...state, ...data, rating });
    navigate("/confirm");
  };

  const handleRatingChange = (newRating) => {
    if (newRating === rating) {
      setRating(0);
      setFeedback("");
    } else {
      setRating(newRating);
      setFeedback(getFeedbackMessage(newRating));
    }
  };

  useEffect(() => {
    setFeedback(getFeedbackMessage(rating));
  }, [rating]);

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Field label="">
        <StarRating
          rating={rating}
          onRatingChange={handleRatingChange}
          feedback={feedback}
        />
      </Field>
      <Field label="">
        <textarea
          {...register("comment")}
          id="comment"
          placeholder="Diga-nos sobre sua experiência com o produto..."
          className="form-control"
        />
      </Field>
      <div className="button-row button">
        <Button>
          <Link className="btn btn-secondary" to="/">
            <BiLeftArrowAlt /> Voltar
          </Link>
        </Button>
        <Button>Próximo <BiRightArrowAlt /></Button>
      </div>
    </Form>
  );
};

const getFeedbackMessage = (rating) => {
  switch (rating) {
    case 1:
      return "Horrível";
    case 2:
      return "Péssimo";
    case 3:
      return "Razoável";
    case 4:
      return "Bom";
    case 5:
      return "Muito Bom";
    default:
      return "";
  }
};

