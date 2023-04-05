/* eslint-disable no-unused-vars */
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
  useTheme,
} from "@material-ui/core";
import { ExpandMore, Delete } from "@material-ui/icons";
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";

function Mailbox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          [...messages].sort(
            (a, b) => new Date(b.date_sent) - new Date(a.date_sent)
          )
        );
        break;
      case "author":
        setFilteredMessages(
          [...messages].sort((a, b) => {
            if (
              typeof a.author_id === "string" &&
              typeof b.author_id === "string"
            ) {
              return a.author_id.localeCompare(b.author_id);
            }
            return 0;
          })
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

  const handleDeleteMessage = async (id, event) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFilteredMessages(
        filteredMessages.filter((message) => message.id !== id)
      );
      const parentElement = event.currentTarget.closest(".MuiGrid-root");
      parentElement.style.display = "none";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid container style={{ paddingTop: "0.5%" }}>
        <Grid
          item
          xs={12}
          sx={{
            mt: { xs: "60px", sm: "20px", md: "20px" },
          }}
        >
          <Header title="MAILBOX" subtitle="Welcome to the mailbox" />
        </Grid>
      </Grid>

      <Box py={3} style={{ paddingTop: "5%" }}>
        <Container maxWidth="sm">
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
                  <Accordion style={{ background: colors.grey[700] }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="h6">{message.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Paper
                        elevation={3}
                        style={{ width: "100%", backgroundColor: "#ffffff" }}
                      >
                        <Box p={3}>
                          <Typography variant="body1">
                            {message.content}
                          </Typography>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography
                              variant="caption"
                              style={{ marginLeft: "10px" }}
                            >
                              Author: {message.author_id}
                            </Typography>
                            <Typography
                              variant="caption"
                              style={{ marginLeft: "40%" }}
                            >
                              Date sent:{" "}
                              {new Date(message.date_sent).toLocaleDateString(
                                "fr-FR"
                              )}
                            </Typography>
                          </Box>

                          <IconButton
                            color="secondary"
                            onClick={(event) =>
                              handleDeleteMessage(message.id, event)
                            }
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
    </>
  );
}

export default Mailbox;
