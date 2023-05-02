import { useId } from "react";

import React from 'react'

export default function GeneratingID(props) {

    const IdGenerated = useId();

 return IdGenerated;
}
