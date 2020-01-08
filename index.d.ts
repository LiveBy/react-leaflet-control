import * as React from 'react';

interface ControlProps {
  position: 'topleft' | 'topright' | 'bottomright' | 'bottomleft';
  children: React.ReactNode;
}

export default class extends React.Component<ControlProps> {}
