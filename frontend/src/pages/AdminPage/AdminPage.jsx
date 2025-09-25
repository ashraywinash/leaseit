import TicketCard from "../../components/TicketCard/TicketCard";
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import axios from 'axios';
const AdminPage = () => {
    const [tickets, setTickets] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://your-api-endpoint/tickets');
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    // const completedTickets = tickets.filter(ticket => ticket.status === 'completed');
    // const incompleteTickets = tickets.filter(ticket => ticket.status !== 'completed');

    const completedTickets = [
  {
    _id: "1",
    title: "Fix login bug",
    description: "Users unable to log in with correct credentials on Safari.",
    status: "completed",
    priority: "high",
    assignedTo: "Alice Johnson",
    createdAt: "2025-09-01T10:15:00Z",
    completedAt: "2025-09-05T14:30:00Z"
  },
  {
    _id: "2",
    title: "Update landing page design",
    description: "Redesign hero section with new branding assets.",
    status: "completed",
    priority: "medium",
    assignedTo: "Bob Smith",
    createdAt: "2025-08-20T09:00:00Z",
    completedAt: "2025-08-28T16:45:00Z"
  }
];

const incompleteTickets = [
  {
    _id: "3",
    title: "Implement dark mode",
    description: "Add toggle for dark/light theme across the app.",
    status: "in-progress",
    priority: "medium",
    assignedTo: "Charlie Brown",
    createdAt: "2025-09-10T11:20:00Z"
  },
  {
    _id: "4",
    title: "Database optimization",
    description: "Optimize queries for faster dashboard load times.",
    status: "open",
    priority: "high",
    assignedTo: "Diana Prince",
    createdAt: "2025-09-12T08:40:00Z"
  },
  {
    _id: "5",
    title: "Customer feedback integration",
    description: "Add new feedback form and sync responses with CRM.",
    status: "open",
    priority: "low",
    assignedTo: "Ethan Hunt",
    createdAt: "2025-09-18T14:10:00Z"
  }
];



    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Incomplete Tickets" />
                <Tab label="Completed Tickets" />
            </Tabs>

            <Box sx={{ p: 3 }}>
                {activeTab === 0 && (
                    <Box sx={{ display: 'grid', gap: 2 }}>
                        {incompleteTickets.map(ticket => (
                            <TicketCard
                                key={ticket._id}
                                title={ticket.title}
                                description={ticket.description}
                                status={ticket.status}
                                priority={ticket.priority}
                                {...ticket}
                            />
                        ))}
                    </Box>
                )}

                {activeTab === 1 && (
                    <Box sx={{ display: 'grid', gap: 2 }}>
                        {completedTickets.map(ticket => (
                            <TicketCard
                                key={ticket._id}
                                title={ticket.title}
                                description={ticket.description}
                                status={ticket.status}
                                priority={ticket.priority}
                                {...ticket}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default AdminPage;
