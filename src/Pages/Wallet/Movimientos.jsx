import React from 'react';
import {
    Box,
    Button,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
} from '@mui/material';
import styled from '@emotion/styled';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';

const StyledBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 15px;
    flex-direction: column;
`;

const StyledList = styled(List)`
    max-height: 65vh;
    min-width: 25vw;
    overflow: scroll;
    background: white;
    color: black;
    border-radius: 5px;
    font-size: 2rem;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

function Movimientos() {
    const { transactions } = useSelector((state) => state.transactions);

    return (
        <>
            <StyledBox>
                <Typography variant="h5" style={{ marginBottom: '1em' }}>
                    Movimientos
                </Typography>
                <StyledList>
                    {transactions.map((transaction) => (
                        <ListItem
                            key={transaction.id}
                            sx={{
                                height: '50px',
                                '&:hover': {
                                    bgcolor: 'lightGray',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    {transaction.categoryId === '12' ? (
                                        <AddOutlinedIcon color="primary" />
                                    ) : (
                                        <RemoveOutlinedIcon color="primary" />
                                    )}
                                </Avatar>
                            </ListItemAvatar>
                       <ListItemText
                            primary={"$ " + transaction.amount}
                            secondary={
                            transaction.createdAt.split("T")[0] +
                            " - " +
                            transaction.description
                                            }
                                        />
                        </ListItem>
                    ))}
                </StyledList>
            </StyledBox>
        </>
    );
}

export default Movimientos;
