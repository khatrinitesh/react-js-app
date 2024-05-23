import React from 'react';
import {Stack,Button,Form} from 'react-bootstrap';

export default function Stacks() {
  return (
    <>
     <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
    <hr/>
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <hr/>
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
    <hr/>
      <Stack direction='horizontal' gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="vr" />
        <div className="p-2">Third item</div>
        </Stack>
    </>
  )
}
