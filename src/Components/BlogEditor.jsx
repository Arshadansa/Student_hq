import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaParagraph, FaHeading, FaImage, FaVideo, FaTable } from 'react-icons/fa';

const Editor = () => {
  const [components, setComponents] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const newComponents = [...components];
    const [removed] = newComponents.splice(source.index, 1);
    newComponents.splice(destination.index, 0, removed);

    setComponents(newComponents);
  };

  const addComponent = (type) => {
    const newComponent = { id: uuid(), type };
    setComponents([...components, newComponent]);
  };

  const deleteComponent = (id) => {
    const newComponents = components.filter((component) => component.id !== id);
    setComponents(newComponents);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Component Menu</h2>
        <div className="space-y-2">
          <button className="flex items-center bg-gray-200 p-2 rounded" onClick={() => addComponent('paragraph')}>
            <FaParagraph className="mr-2" /> Paragraph
          </button>
          <button className="flex items-center bg-gray-200 p-2 rounded" onClick={() => addComponent('heading')}>
            <FaHeading className="mr-2" /> Heading
          </button>
          <button className="flex items-center bg-gray-200 p-2 rounded" onClick={() => addComponent('image')}>
            <FaImage className="mr-2" /> Image
          </button>
          <button className="flex items-center bg-gray-200 p-2 rounded" onClick={() => addComponent('video')}>
            <FaVideo className="mr-2" /> Video
          </button>
          <button className="flex items-center bg-gray-200 p-2 rounded" onClick={() => addComponent('table')}>
            <FaTable className="mr-2" /> Table
          </button>
        </div>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">Editor</h2>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="components">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {components.map((component, index) => (
                  <Draggable key={component.id} draggableId={component.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="bg-gray-200 p-2 rounded mb-2"
                      >
                        {component.type === 'paragraph' && <p>Paragraph Component</p>}
                        {component.type === 'heading' && <h2>Heading Component</h2>}
                        {component.type === 'image' && <img src="path/to/image.jpg" alt="Image Component" />}
                        {component.type === 'video' && <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video Component" />}
                        {component.type === 'table' && (
                          <table>
                            <thead>
                              <tr>
                                <th>Table</th>
                                <th>Component</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Row 1</td>
                                <td>Row 1</td>
                              </tr>
                              <tr>
                                <td>Row 2</td>
                                <td>Row 2</td>
                              </tr>
                            </tbody>
                          </table>
                        )}
                        <button
                          onClick={() => deleteComponent(component.id)}
                          className="text-red-500 font-bold underline"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Editor;
