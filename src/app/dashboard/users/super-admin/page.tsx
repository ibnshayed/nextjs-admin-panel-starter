"use client";

import Button from "@/components/buttons/Button";
import PageWrapper from "@/components/header/PageWrapper";
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const SuperAdminPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageWrapper
      name="Super Admin"
      icon={
        <Link href="/dashboard/users/super-admin/create">
          <Button>
            <FaPlus />
            <p>create</p>
          </Button>
        </Link>
      }
    >
      <p>bangladesh</p>
    </PageWrapper>
  );
};

export default SuperAdminPage;
