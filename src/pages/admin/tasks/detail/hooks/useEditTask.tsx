import { useMutation } from "@hooks/useMutation";
import { EditTasksInputDto } from "@services/tasks/models/input.model";
import { tasksService } from "@services/tasks/tasks.service";
import { useAppDispatch } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";
import { useParams } from "react-router-dom";

type PropsType = {
  onSuccess?: () => void;
};

export const useEditContact = ({ onSuccess }: PropsType) => {
  const params = useParams();
  const { taskId } = params;

  const dispatch = useAppDispatch();

  const { mutation, isLoading } = useMutation<void, EditTasksInputDto>({
    mutationFn: (input) => tasksService.editTask(taskId ?? "", input),
    onSuccess: () => {
      if (onSuccess) onSuccess();
      dispatch(tasksSliceThunk.fetchTasksDetailAsync(taskId ?? ""));
    },
  });

  return { isLoading, editContact: mutation };
};
