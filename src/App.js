import React from 'react'
import {Navigation} from "./routes"

import {ClientLayout} from "./layouts"
import {AdminLayout} from "./layouts"

export default function App() {
  return (
    <AdminLayout>
      <h1>Fernando Gutierrez</h1>
      <p>Un parrafo</p>
       <Navigation />
    </AdminLayout>
  );
}
