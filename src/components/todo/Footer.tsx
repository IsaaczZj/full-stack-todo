import { Container } from "../ui/container";
import { Text } from "../ui/text";

export function Footer() {
  return (
    <Container className="flex items-center justify-center mt-5 md:mt-10">
      <Text variant="body-md-bold" className="text-gray-300">
        Todos os direito reservados {new Date().getFullYear()}
      </Text>
    </Container>
  );
}
