import React, { useEffect, useState } from "react";
import Link from "next/link";


const Abstract = () => {
  return (
    <div>
      <Link href="../abstracts/first">
        <li> 1. A Quick Introduction to Version Control with Git and GitHub</li>
      </Link>
      <Link href="../abstracts/second">
        <li> 2. A large-scale analysis of bioinformatics code on GitHub</li>
      </Link>
      <Link href="../abstracts/third">
        <li> 3. Ten Simple Rules for Taking Advantage of Git and GitHub</li>
      </Link>
      <Link href="../abstracts/fourth">
        <li> 4. Status, identity, and language: A study of issue discussions in GitHub</li>
      </Link>
      <Link href="../abstracts/fifth">
        <li> 5. Correction: Ten Simple Rules for Taking Advantage of Git and GitHub</li>
      </Link>
      <Link href="../abstracts/sixth">
        <li> 6. Emojis predict dropouts of remote workers: An empirical study of emoji usage on GitHub</li>
      </Link>
      <Link href="../abstracts/seventh">
        <li> 7. Multiple social platforms reveal actionable signals for software vulnerability awareness: A study of GitHub, Twitter and Reddit</li>
      </Link>

    </div>
  );
};

export default Abstract;
