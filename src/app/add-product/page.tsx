"use client";

import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import FormSubmitButton from '../components/FormSubmitButton';

let prisma: PrismaClient;

export const metadata = {
  title: "Add Product - Next Amazon"
}

export default function AddProduct() {
  async function onSubmit(formData: FormData) {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);
    
    if(!name || !description || !imageUrl || !price) {
      return Error("missing required field");
    }
    // throw Error("Bazinga!")
    await prisma.product.create({
      data: { name, description, imageUrl, price }
    });
    
    redirect("/");
  }

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold ">Add Product</h1>
      <form action={onSubmit}>
        <input
          required
          name="name"
          type="text"
          placeholder="Product name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea 
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="ImageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton className="btn btn-primary btn-block">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
