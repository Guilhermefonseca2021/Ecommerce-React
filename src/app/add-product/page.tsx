export default function AddProduct() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold ">Add Product</h1>
      <form>
        <input
          required
          name="name"
          type="number"
          className="input-bordered mb-3 w-full"
        />
        <textarea 
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <textarea 
          required
          name="imageURL"
          placeholder="image URL"
          typeof="url"
          className="input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          type="number"
          className="input-bordered mb-3 w-full"
        />
        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
