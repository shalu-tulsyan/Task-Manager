import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditModal from '../Popups/EditModal';

export default function CustomCard({ task, index,deleteTask,updateTaskList}) {
  
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);

  function handleDelete() {
    deleteTask(index);
  }
  
  function handleEdit() {
    setIsEditPopupVisible(true);
  }

  function editTask(obj) {
    updateTaskList(obj, index);
    setIsEditPopupVisible(false);
  }

  return (
    <>
      <Card key={index} className='basis-1/5 border-t-4 border-CardColor' sx={{ maxWidth: 600 }}>
          <span
            className='bg-CardColor bg-opacity-10 inline-block text-xl mx-3 my-2 px-3 py-1 rounded'
          >
            {task.name}
          </span>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          </CardContent>
          <CardActions className='justify-end' disableSpacing>
            <IconButton onClick={handleEdit}>
              <EditNoteIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <AutoDeleteIcon />
            </IconButton>
          </CardActions>
      </Card>
      <EditModal
        isEditPopupVisible={isEditPopupVisible}
        task={task}
        editTask={editTask}
      />
      </>
    );
}