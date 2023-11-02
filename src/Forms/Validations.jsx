import * as yup from "yup"

export const Validations = yup.object().shape({
    name: yup.string().required("Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 letras"),
    email: yup.string().required("Email é obrigatório")
    .email("Digite um email válido"),
    phone: yup.string("Telefone deve ser nmeros").required("Telefone é obrigatório")
    .min(9, "Telefone deve ter pelo menos 9 números")
    .max(12, "Telefone deve ter até 12 números")
})