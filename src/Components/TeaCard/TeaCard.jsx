import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const TeaCard = ({ tea }) => {
    const { name, photoUrl,
        details,
        category,
        taste, supplier,
        quantity, _id} = tea;
        const handleDelete = _id => {
            console.log(_id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                    console.log('delete confirmed');

                }
              });
        }
    return (
        <div className=" bg-base-100 shadow-lg p-6">
            <figure className="">
                <img
                    src={photoUrl}
                    alt="tea photo"
                    className="rounded-xl" />
            </figure>
            <div className="space-y-3 mt-3">
                <h2 className="card-title">{category}</h2>
                <p className="font-medium">Taste: {taste}</p>
                <p className="font-medium">Supplier: {supplier}</p>
                <p className="font-medium">Quantity: {quantity}</p>
                <div className="card-actions">
                    <button className="btn bg-[#331A15] text-white text-xl"><FaEye></FaEye></button>
                    <button className="btn bg-[#331A15] text-white text-xl"><FaPen></FaPen></button>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#331A15] text-white text-xl"><MdDelete></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default TeaCard;