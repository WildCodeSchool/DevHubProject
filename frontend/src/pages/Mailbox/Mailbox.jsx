import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { ExpandMore, Delete } from "@material-ui/icons";
import Message from "../../components/Messages/Message";

function Mailbox() {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [filterOption, setFilterOption] = useState("date");

  useEffect(() => {
    async function fetchMessages() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/messages", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data);
        setFilteredMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMessages();
  }, []);

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    switch (event.target.value) {
      case "date":
        setFilteredMessages(
          [...messages].sort((a, b) => new Date(b.date) - new Date(a.date))
        );
        break;
      case "author":
        setFilteredMessages(
          [...messages].sort((a, b) => a.author.localeCompare(b.author))
        );
        break;
      case "title":
        setFilteredMessages(
          [...messages].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      default:
        break;
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFilteredMessages(
        filteredMessages.filter((message) => message.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box py={3}>
      <Container maxWidth="md">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Mailbox</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              fullWidth
              native
              value={filterOption}
              onChange={handleFilterChange}
            >
              <option value="date">Date</option>
              <option value="author">Author</option>
              <option value="title">Title</option>
            </Select>
          </Grid>
        </Grid>
        <Box my={3}>
          <Grid container spacing={3}>
            {filteredMessages.map((message) => (
              <Grid item key={message.id} xs={12}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6">{message.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paper elevation={3}>
                      <Box p={3}>
                        <Message message={message} />
                        <IconButton
                          color="secondary"
                          onClick={() => handleDeleteMessage(message.id)}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    </Paper>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Mailbox;
