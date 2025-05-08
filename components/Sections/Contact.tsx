"use client";

import { Input } from "../ui/input";
import Stack from "../ui/stack";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Mail, Phone, Send, User } from "lucide-react";
import CustomIcon from "../Elements/Icons/CustomIcon";
import { useState } from "react";
import axios from "axios";
import { Animated } from "../Elements/Animated/Animated";
import { ANIMATIONS, chat_id, post_uri } from "@/lib/constants";
import { AppLang } from "@/lib/types";
// import { ring } from "ldrs";

type Inputs = {
  name: string;
  phone: string;
  telegram: string;
  field: string;
};
const Fields = {
  name: {
    placeholder: {
      uzb: "Ismingiz",
      rus: "Ваше имя",
    },
    label: {
      uzb: "*Ismingizni kiriting",
      rus: "*Введите свое имя",
    },
  },
  telegram: {
    placeholder: {
      uzb: "Telegramingiz",
      rus: "Ваш телеграм",
    },
    label: {
      uzb: "*Telegram userni kiriting",
      rus: "*Введите Telegram user",
    },
  },
  phone: {
    placeholder: {
      uzb: "Telefoningiz",
      rus: "Ваш телефон",
    },
    label: {
      uzb: "*Telefon raqamingizni kiriting",
      rus: "*Введите свой номер телефона",
    },
  },
  message: {
    placeholder: {
      uzb: "Xabar...",
      rus: "Сообщение...",
    },
    label: {
      uzb: "*Xabar kiriting",
      rus: "*Введите сообщение",
    },
  },
  button: {
    text: {
      uzb: "Yuborish",
      rus: "Отправить",
    },
  },
  errors: {
    name: {
      required: {
        uzb: "Ism maydoni majburiy",
        rus: "Имя в поле обязательное",
      },
    },
    telegram: {
      required: {
        uzb: "Telegram maydoni majburiy",
        rus: "Телеграм поле обязательное",
      },
      invalid: {
        uzb: "Telegram username ni @ bilan boshlang",
        rus: "Начните username Telegram с @",
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
    message: {
      required: {
        uzb: "Xabar maydoni majburiy",
        rus: "Поле сообщения обязательное",
      },
      invalid: {
        uzb: "Maksimum 300 ta so'z",
        rus: "Максимум 300 слов",
      },
    },
  },
  success: {
    uzb: "Muvaffaqiyatli jo'natildi",
    rus: "Отправлено успешно",
  },
};

const ContactForm = ({ lang }: { lang: AppLang }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [loading, setLoading] = useState(false);

  // ring.register();

  const schema = z.object({
    name: z.string().min(1, { message: Fields.errors.name.required[lang] }),
    telegram: z
      .string()
      .min(2, { message: Fields.errors.telegram.required[lang] })
      .startsWith("@", { message: Fields.errors.telegram.invalid[lang] }),
    phone: z
      .string()
      .nonempty({ message: Fields.errors.phone.required[lang] })
      .length(9, { message: Fields.errors.phone.invalid[lang] }),
    field: z
      .string()
      .nonempty({ message: Fields.errors.message.required[lang] })
      .max(300, { message: Fields.errors.message.invalid[lang] }),
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
    const message = `
    Ism:${data.name}
    Telegram: ${data.telegram}
    Telefon: +998${data.phone}
    Xabar: ${data.field}
    `;
    const settings = {
      chat_id,
      text: message,
    };
    setLoading(true);
    const res = await axios.post(post_uri, settings);
    setLoading(false);
    reset();
    toast.success(Fields.success[lang]);
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
      <ToastContainer draggable closeOnClick />
      <Animated animation={ANIMATIONS.FLIP.X}>
        <form
          onSubmit={handleSubmit(onSubmit, handleValidation)}
          className="bg-secondBg p-[50px] md:p-[20px] rounded-lg border-effectt border-[1px] border-primary grid grid-cols-2 gap-6 lg:grid-cols-1 w-[70%] xl:w-full mx-auto mt-10"
        >
          <Stack align="column" className="relative lg:col-span-2">
            <Input
              {...register("name")}
              placeholder={Fields.name.placeholder[lang]}
              className={`ps-[40px!important] ${
                errors.name?.message && "border-red-500"
              }`}
              id="name"
            />
            <label
              htmlFor="name"
              className="mt-2 text-primary text-[14px] leading-[18px]"
            >
              {Fields.name.label[lang]}
            </label>
            <User size={18} className="absolute left-[10px] top-[13px]" />
          </Stack>
          <Stack align="column" className="relative lg:col-span-2">
            <Input
              {...register("telegram")}
              placeholder={Fields.telegram.placeholder[lang]}
              className={`ps-[40px!important] ${
                errors.telegram?.message && "border-red-500"
              }`}
              id="telegram"
            />
            <label
              htmlFor="telegram"
              className="mt-2 text-primary text-[14px] leading-[18px]"
            >
              {Fields.telegram.label[lang]}
            </label>
            <CustomIcon
              svg="/svg/telegram.svg"
              width={18}
              height={18}
              color="#fff"
              className="absolute left-[10px] top-[14px]"
            />
          </Stack>
          <Stack align="column" className="relative col-span-2">
            <Input
              {...register("phone")}
              placeholder={Fields.phone.placeholder[lang]}
              type="number"
              maxLength={9}
              id="phone"
              className={`ps-[85px!important] ${
                errors.phone?.message && "border-red-500"
              }`}
            />
            <label
              htmlFor="phone"
              className="mt-2 text-primary text-[14px] leading-[18px]"
            >
              {Fields.phone.label[lang]}
            </label>
            <p className="absolute left-[40px] top-[10px]">+998</p>
            <Phone size={18} className="absolute left-[10px] top-[13px]" />
          </Stack>
          <Stack align="column" className="relative col-span-2">
            <Textarea
              {...register("field")}
              placeholder={Fields.message.placeholder[lang]}
              className={`min-h-[100px] ps-[40px!important] ${
                errors.field?.message && "border-red-500"
              }`}
              id="field"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
            <label
              htmlFor="field"
              className="mt-2 text-primary text-[14px] leading-[18px] flex items-center justify-between"
            >
              {Fields.message.label[lang]}{" "}
              <span>{`${textareaValue.length} / 300`}</span>
            </label>
            <Mail size={18} className="absolute left-[10px] top-[13px]" />
          </Stack>
          <Button
            type="submit"
            disabled={loading}
            className={`w-[150px] h-[50px] mt-2 ${
              loading && "cursor-progress"
            }`}
          >
            {Fields.button.text[lang]} <Send />
          </Button>
        </form>
      </Animated>
    </>
  );
};

export { ContactForm };
