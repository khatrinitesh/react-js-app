import React from 'react'

const TreeVideApp = () => {
    const data = {
        label: 'Root',
        children: [
          {
            label: 'Node 1',
            children: [
              { label: 'Node 1.1', children: [] },
              { label: 'Node 1.2', children: [] },
            ],
          },
          {
            label: 'Node 2',
            children: [
              { label: 'Node 2.1', children: [] },
              { label: 'Node 2.2', children: [] },
            ],
          },
        ],
      };
  return (
    <>
      <TreeView data={data}/>
    </>
  )
}

export default TreeVideApp

const TreeNode = ({ node }) => {
    const hasChildren = node.children && node.children.length > 0;
  
    return (
      <div>
        <div>{node.label}</div>
        {hasChildren && (
          <ul>
            {node.children.map((child, index) => (
              <li key={index}>
                <TreeNode node={child} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const TreeView = ({ data }) => {
    return (
      <div>
        <h1>Logic-Driven Tree View</h1>
        <TreeNode node={data} />
      </div>
    );
  };
