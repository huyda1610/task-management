import { useState } from "react";

type PropsType<OutputType, InputType> = {
  mutationFn: (input: InputType) => Promise<OutputType>;
  onSuccess?: (data: OutputType) => void;
  onError?: (error: any) => void;
};

export const useMutation = <OutputType, InputType = void>({
  mutationFn,
  onSuccess,
  onError,
}: PropsType<OutputType, InputType>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<OutputType | null>(null);

  const mutation = async (input: InputType) => {
    setIsLoading(true);

    try {
      const res = await mutationFn(input);

      setData(res);
      if (onSuccess) onSuccess(res);
    } catch (error) {
      if (onError) onError(error);
    }

    setIsLoading(false);
  };

  return { mutation, data, isLoading };
};
