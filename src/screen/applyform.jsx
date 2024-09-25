import React, { useState, useRef , useEffect } from "react";
import SKInput from "../component/SKInput";
import SKSelect from "../component/SKSelect";
import '../screen/apply_testimonial.css'
import FooterBlog from "../component/footerblog";
import MainHeader from "../component/mainheader";
import Loader from "../component/loader";
  /* ======================--------------====================== */
import { db, storage } from "../config/firebaseconfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import BLButton from "../component/BLbutton";


export default function Contact() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleRemoveFile = (id) => {
    const updatedFiles = [...files];
    updatedFiles.splice(id, 1);
    setFiles(updatedFiles);
  };
  
  /* ======================--------------====================== */
  const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState(null);
  const [isUploading, setIsUploading] = useState(false); 
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    city: "",
    country: "",
    height: "",
    waist: "",
    gender: "",
    dateofbirth: "",
    additionalinfo: "",
    agreement: "",
  });

  const { id } = useParams();

  const { firstname , lastname , email , phonenumber , city , country , height , waist , gender
    , dateofbirth , additionalinfo , agreement } = form;

  useEffect(() => {
    const uploadFile = () => {
      setIsUploading(true); 
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          // setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
            setIsUploading(false);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
  
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
    setActive(null);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstname && lastname && email && phonenumber && city && country && height && waist && gender
      && dateofbirth && additionalinfo && agreement) {
      if (!id) {
        try {
          await addDoc(collection(db, "applynow"), {
            ...form,
            timestamp: serverTimestamp(),
          });
          toast.success("ApplyNow Form Submit Successfully");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await updateDoc(doc(db, "applynow", id), {
            ...form,
            timestamp: serverTimestamp(),
          });
          toast.success("ApplyNow Form updated successfully");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("All fields are mandatory to fill");
    }
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      city: "",
      country: "",
      height: "",
      waist: "",
      gender: "",
      dateofbirth: "",
      additionalinfo: "",
      agreement: "",
    })
  };
  /* ======================--------------====================== */
  const handleGenderChange = (gender) => {
    setForm({...form , gender : gender});
  };
  console.log(form)
  //Loader section
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
      <MainHeader/>
      <ToastContainer
      position="top-center"
      autoClose={3000}
      theme="dark"
      />
      <div className="main_div">
        <div className="container h_100">
          <div className="applyNow_heading">
            <p>Apply Now <span>#BLACKLIST</span></p>
          </div>
          <div className="applyNow_content">
            <p>
              To apply, we kindly ask you to fill in this form and send it
              together with the following documents:
            </p>
            <li>
              A clear head shot, a full body picture and an additional swimwear
              shot
            </li>
            <li>We do not necessarily need professional pictures</li>
            <li>The size of your pictures should not exceed 3Mb each</li>
            <p>
              Potential candidates will be directly contacted by one of our
              bookers.
            </p>
          </div>
          <div className="form_main">
            <div className="formHeading formHeading1 formHeadingMargin">
              <h3>Personal Details</h3>
            </div>
            <div className="inp">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="First Name"
                    type="text"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , firstname : e.target.value})}
                  />
                </div>
                <div className="col-lg-5">
                  <SKInput
                    placeholder="Last Name"
                    type="text"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , lastname : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                  <SKInput
                    placeholder="Email"
                    type="email"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , email : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                  <SKInput
                    placeholder="Phone Number"
                    type="number"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , phonenumber : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 mt-4">
                  <SKInput
                    placeholder="City"
                    type="text"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , city : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                  <SKInput
                    placeholder="Country"
                    type="text"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , country : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 mt-4">
                  <SKInput
                    placeholder="Height"
                    type="text"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , height : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                  <SKInput
                    placeholder="Waist"
                    type="text"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , waist : e.target.value})}
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                  <SKSelect
                    borderBottomColor="#5F5D5D"
                    inputColor="#fff"
                    color="#5F5D5D"
                    dropDownColor="#000"
                    onGenderChange={handleGenderChange}
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 mt-4 width-100">
                  <SKInput
                    placeholder="Date Of Birth"
                    type="date"
                    width="95%"
                    className="SKInp"
                    onChange={(e) => setForm({...form , dateofbirth:e})}
                    value={form.dateofbirth}
                  />
                </div>
                {/* <div className="col-lg-2 col-md-4 col-sm-12 mt-4 width-100">
                  <SKInput
                    placeholder="Month"
                    type="text"
                    width="100%"
                    className="SKInp"
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 mt-4 width-100">
                  <SKInput
                    placeholder="Year"
                    type="text"
                    width="85%"
                    className="SKInp"
                  />
                </div> */}
              </div>
            </div>
            <div className="formHeading formHeading2 formHeadingMargin">
              <h3>Social</h3>
            </div>
            <div className="inp">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="e.g instagram.com/incblacklist"
                    type="text"
                    width="95%"
                    className="SKInp"
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="e.g facebook.com/incblacklist"
                    type="text"
                    width="95%"
                    className="SKInp"
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="e.g twitter/incblacklist"
                    type="email"
                    width="95%"
                    className="SKInp"
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="e.g tiktok.com/incblacklist"
                    type="text"
                    width="95%"
                    className="SKInp"
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="e.g youtube.com/incblacklist"
                    type="text"
                    width="95%"
                    className="SKInp"
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <SKInput
                    placeholder="e.g https://intheblacklist.com"
                    type="text"
                    width="95%"
                    className="SKInp"
                  />
                </div>
              </div>
            </div>
            <div className="uploadFiles">
  <div
    className="dropZone"
    onDragOver={handleDragOver}
    onDrop={handleDrop}
  >
    <h3>Drag & Drop Files Here</h3>
    <p>or</p>
    <input
      type="file"
      multiple
      onChange={(e) => {
        setFiles(Array.from(e.target.files));
        setFile(e.target.files[0]);
      }}
      hidden="hidden"
      ref={inputRef}
    />
    <button onClick={() => inputRef.current.click()}>
      Browse Files
    </button>
  </div>
  <div className="uploads">
    <ul>
      {files.map((file, id) => (
        <li key={id}>
          {file.name}{" "}
          <button onClick={() => handleRemoveFile(id)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>
            <div className="formHeading formHeading3 formHeadingMargin">
              <h3>Additional Information</h3>
            </div>
            <div className="additional_content col-md-12 col-sm-12">
              <SKInput
                type="text"
                className="inpImg SKInp"
                width="96%"
                placeholder="About your skills, interest and any relevant experience"
                onChange={(e) => setForm({...form , additionalinfo : e.target.value})}
              />
            </div>
            <div className="formCheckBox">
              <input
              type="checkbox"
              onChange={(e) => setForm({ ...form, agreement: e.target.checked })}
              checked={form.agreement}
              />
              <span className="checkBoxContent">
                I agree to your{" "}
                <span className="checkBoxLink">Terms & Condition </span>and{" "}
                <span className="checkBoxLink">Privacy Policy</span>.
                </span>
                </div>
                <div>
                  <BLButton style={{color:'white' , border:'1px solid white' , borderRadius:'0' , fontSize: '1.4vw',padding:'10px' , marginTop:'5%' }} label='Submit' onClick={handleSubmit} disabled={isUploading}/>
                </div>
          </div>
        </div>
      </div>
      <FooterBlog/>
    </>
    )}
  </>
  );
}
