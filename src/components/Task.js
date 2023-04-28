import styled from "@emotion/styled";
import { useTasks } from "../contexts/TaskProvider";
import Toggle from "./Toggle";

const ListItem = styled.li`
    display: flex;
    width: 400px;
    height: 40px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    list-style: none;
`;

const Content = styled.span`
    flex: 1;
    margin-left: 8px;
    font-size: 14px;
    text-decoration: ${({complete}) => (complete ? 'line-through' : 'none')};
`;

const RemoveButton = styled.button`
    width: 60px;
    height: 24px;
    margin-left: 8px;
    color: white;
    border-radius: 8px;
    border:none;
    background-color: #e01000;
    cursor: pointer;
`;
export default function Task({ id, content, complete, ...props}) {
    const { updateTask, removeTask } = useTasks();

    return <ListItem {...props}>
        <Toggle type="checkbox" on={complete} onChange={(e) => updateTask(id, e.target.value)} />
        <Content complete={complete}>{content}</Content>
        <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>;
}