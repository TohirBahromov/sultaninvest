"use client";

import { AppLang } from "@/lib/types";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Modal from "./Modal";
import { useModalStore } from "@/lib/store/modal";
import { z } from "zod";
import Stack from "../ui/stack";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { chat_id, post_uri } from "@/lib/constants";

type serviceOrderProps = {
  lang: AppLang;
};
type Inputs = {
  name: string;
  phone: string;
};

const Fields = {
  name: {
    uzb: "Ismingiz",
    rus: "Ваше имя",
  },
  phone: {
    uzb: "Telefoningiz",
    rus: "Ваш телефон",
  },
  send: {
    uzb: "Yuborish",
    rus: "Отправить",
  },
  errors: {
    name: {
      required: {
        uzb: "Ism maydoni majburiy",
        rus: "Имя в поле обязательное",
      },
    },
    phone: {
      required: {
        uzb: "Telefon maydoni majburiy",
        rus: "Телефонное поле обязательное",
      },
      invalid: {
        uzb: "Noto'g'ri raqam kiritdingiz",
        rus: "Вы ввели неправильный номер",
      },
    },
    noOrderFound: {
      uzb: "Nimadir xato ketti",
      rus: "Что-то не так",
    },
  },
  success: {
    uzb: "Muvaffaqiyatli jo'natildi",
    rus: "Отправлено успешно",
  },
};

const ServiceOrder = ({ lang }: serviceOrderProps) => {
  const { modal, close } = useModalStore();
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().min(1, { message: Fields.errors.name.required[lang] }),
    phone: z
      .string()
      .nonempty({ message: Fields.errors.phone.required[lang] })
      .length(9, { message: Fields.errors.phone.invalid[lang] }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const service = localStorage.getItem("order");
    if (!service) return toast.error(Fields.errors.noOrderFound[lang]);
    const message = `
    Ism:${data.name}
    Telefon: +998${data.phone}
    Servis: ${service}
    `;
    const settings = {
      chat_id,
      text: message,
    };
    setLoading(true);
    const res = await axios.post(post_uri, settings);
    setLoading(false);
    toast.success(Fields.success[lang]);
    reset();
    close();
  };

  const handleValidation = () => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        if (error?.message) {
          toast.error(error.message);
        }
      });
    }
  };

  return (
    <>
      {modal === "service-order" && (
        <Modal>
          <form
            onSubmit={handleSubmit(onSubmit, handleValidation)}
            className="w-[500px] md:w-[400px] sm:w-full h-max p-10 bg-secondary rounded-lg flex flex-col gap-4 border border-solid border-effectt"
          >
            <Input
              placeholder={Fields.name[lang]}
              {...register("name")}
              className={`${errors.name?.message && "border-red-500"}`}
            />
            <Stack className="relative items-center">
              <p className="absolute left-[10px] top-1/2 -translate-y-1/2">
                +998
              </p>
              <Input
                {...register("phone")}
                placeholder={Fields.phone[lang]}
                type="number"
                className={`ps-14 ${errors.phone?.message && "border-red-500"}`}
              />
            </Stack>
            <Button
              disabled={loading}
              className={`w-full h-[40px] mt-2 ${
                loading && "cursor-not-allowed"
              }`}
            >
              {Fields.send[lang]}
            </Button>
          </form>
        </Modal>
      )}
      <ToastContainer draggable closeOnClick />
    </>
  );
};

export default ServiceOrder;
