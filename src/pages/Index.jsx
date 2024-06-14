import { Box, Flex, VStack, Text, Input, Button, Avatar, HStack } from "@chakra-ui/react";
import { useState } from "react";

const contacts = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const messages = [
  { id: 1, sender: "Alice", content: "Hello!" },
  { id: 2, sender: "You", content: "Hi Alice!" },
  { id: 3, sender: "Alice", content: "How are you?" },
];

const Index = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState("");

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      // Placeholder for sending message logic
      console.log(`Message sent to ${selectedContact.name}: ${messageInput}`);
      setMessageInput("");
    }
  };

  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Box width="25%" borderRight="1px solid #e0e0e0" p={4}>
        <VStack align="start" spacing={4}>
          {contacts.map((contact) => (
            <HStack
              key={contact.id}
              p={2}
              borderRadius="md"
              _hover={{ bg: "gray.100", cursor: "pointer" }}
              onClick={() => handleContactClick(contact)}
              bg={selectedContact.id === contact.id ? "gray.200" : "transparent"}
            >
              <Avatar name={contact.name} />
              <Text>{contact.name}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* Main Chat Area */}
      <Flex direction="column" flex="1" p={4}>
        <Box flex="1" overflowY="auto" mb={4}>
          {messages.map((message) => (
            <Box key={message.id} mb={2} alignSelf={message.sender === "You" ? "flex-end" : "flex-start"}>
              <Text fontWeight="bold">{message.sender}</Text>
              <Text>{message.content}</Text>
            </Box>
          ))}
        </Box>
        <HStack>
          <Input
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Index;