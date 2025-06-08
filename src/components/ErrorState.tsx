interface ErrorStateProps {
  message: string;
}

export function ErrorState({ message }: ErrorStateProps) {
  return <div className="text-center mt-20 text-red-500">{message}</div>;
} 