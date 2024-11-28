import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTea = () => {
    const tea = useLoaderData();
    const { name, photoUrl,
        details,
        category,
        taste, supplier,
        quantity, _id } = tea;

    const handleUpdateTea = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const updatedTea = {name, quantity, supplier, taste, category, details, photoUrl}
        console.log(updatedTea);

        // send data to the server
        fetch(`http://localhost:5000/tea/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTea)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Tea updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset()
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className='text-center text-2xl font-bold mb-4'>Update your tea</h2>
            <form onSubmit={handleUpdateTea}>
                {/* form name and quantity row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter tea name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity"
                            defaultValue={quantity}
                            placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Supplier</span>
                            </div>
                            <input type="text" name="supplier" 
                            defaultValue={supplier}
                            placeholder="Enter tea supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter tea taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" 
                            defaultValue={category}
                            placeholder="Enter tea category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details"
                            defaultValue={details}
                            placeholder="Enter tea details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="mb-6">
                    <div className="w-full">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input type="text" name="photoUrl" 
                            defaultValue={photoUrl}
                            placeholder="Enter tea photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Tea" className="btn btn-block bg-[#331A15] text-white" />
            </form>
        </div>
    );
};

export default UpdateTea;