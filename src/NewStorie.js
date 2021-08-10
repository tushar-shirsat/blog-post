import React, { useEffect, useRef, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import "./css/NewStorie.css";
import { storage, db } from "./firebase";
import firebase from "firebase";
import { useHistory, useParams } from "react-router-dom";
import { useProvider } from "./context";

const NewStorie = () => {
  const {type} = useParams();
  const history = useHistory();
  const [titleImage, setTitleImage] = useState("");
  const [storyImages, setStoryImages] = useState([]);
  const [loadImg, setLoadImg] = useState(false);
  const [titleCaption, setTitleCaption] = useState("");
  const [storyCaption, setStoryCaption] = useState([]);
  const Titlefile = useRef(null);
  const Storyfile = useRef(null);

  const handleChange = (e) => {
    setLoadImg(true);
    console.log(loadImg);
    
    const uploadTask = storage
      .ref(`images/${e.target.files[0].name}`)
      .put(e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(e.target.files[0].name)
          .getDownloadURL()
          .then((url) => {
            setTitleImage(url);
            setLoadImg(false);
          });
      }
    );
  };

  const handleStoryImages = (e) => {
    setLoadImg(true);
    const images = [...e.target.files];
    images.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // error functions
          console.log(error);
          alert(error.message);
        },
        () => {
          // complete fucntions
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setStoryImages((prevState) => [...prevState, url]);
              setLoadImg(false);
            });
        }
      );
    });
  };

  useEffect(() => {
    setStoryCaption(
      Object.fromEntries(
        storyImages.map((items, index) => {
          return [[index], ""];
        })
      )
    );
    return () => {
      setStoryCaption(
        Object.fromEntries(
          storyImages.map((items, index) => {
            return [[index], ""];
          })
        )
      );
    };
  }, [storyImages]);

  useEffect(() => {
    if(type==='new'){
      setStoryCaption("");
    }
    else{
      setStoryCaption("");
      db.collection("posts")
      .doc(type)
      .onSnapshot((snapshot) => {
        const data = snapshot.data();
        setStoryImages(data?.story?.captionUrl);
        setTitleCaption(data?.title?.caption);
        setTitleImage(data?.title?.titleUrl);
        setStoryCaption(
          Object.fromEntries(
            data?.story.caption.map((items, index) => {
              return [index, items];
            })
          )
        );
      });
    }
  }, []);

  const handleStory = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStoryCaption({ ...storyCaption, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(type==='new'){
      db.collection("posts").add({
        tiemstamp: firebase.firestore.FieldValue.serverTimestamp(),
        title: { caption: titleCaption, titleUrl: titleImage },
        story: {
          caption: storyImages.length > 0 ? Object.values(storyCaption) : [storyCaption ],
          captionUrl: storyImages.length > 0 ? storyImages : [storyImages],
        },
      });
    }else{
      db.collection("posts").doc(type)
      .update({
        title: { caption: titleCaption, titleUrl: titleImage },
        story: {
          caption: storyImages.length > 0 ? Object.values(storyCaption) : [storyCaption ],
          captionUrl: storyImages.length > 0 ? storyImages : [storyImages],
        },
      })
    }
    history.push('/');
  };

  return (
    <form className="newStorie" onSubmit={handleSubmit}>
      <button type="submit" className="submit__btn">
        Post
      </button>
      <div className="newStorie-control">
        <input
          onChange={handleChange}
          disabled={loadImg}
          ref={Titlefile}
          type="file"
          name="files_title"
          style={{ display: "none" }}
        />
        <AddCircleOutlineOutlinedIcon
          style={{
            fontSize: "4rem",
            paddingRight: "1rem",
            borderRight: "1px solid #aaa",
            color: "#aaa",
            cursor: "pointer",
            fontWeight: "500",
          }}
          onClick={() => Titlefile.current.click()}
        />
        <div style={{ width: "100%" }}>
          {titleImage && (
            <img
              src={titleImage}
              alt="title"
              style={{ width: "50%", objectFit: "contain", maxHeight: "400px" }}
            />
          )}
          <input
            type="text"
            autoComplete="off"
            value={titleCaption}
            onChange={(e) => setTitleCaption(e.target.value)}
            disabled={loadImg}
            name="title"
            placeholder={titleImage ? "Title Caption" : "Titel"}
            className="newStorie-control-title-inp"
          />
        </div>
      </div>
      <div className="newStorie-control" style={{ alignItems: "flex-start" }}>
        <input
          ref={Storyfile}
          onChange={handleStoryImages}
          multiple={true}
          type="file"
          name="files_story"
          style={{ display: "none" }}
        />
        <AddCircleOutlineOutlinedIcon
          style={{
            fontSize: "4rem",
            paddingRight: "1rem",
            color: "#aaa",
            cursor: "pointer",
            fontWeight: "500",
          }}
          onClick={() => Storyfile.current.click()}
        />
        <div className="img-caption__container">
          {storyImages.length > 0 ? (
            storyImages.map((url, index) => {
              console.log(storyCaption.[index]);
              return (
                <div className="sotry-container" style={{ width: "100%" }}>
                  <img
                    src={url}
                    alt="title"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      maxHeight: "400px",
                    }}
                  />
                  <textarea
                    placeholder="write a caption"
                    value={storyCaption.[index]}
                    name={index}
                    onChange={handleStory}
                    style={{ width: "100%", height: "200px" }}
                    className="newStorie__storie"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              );
            })
          ) : (
            <textarea
              placeholder="Tell your story"
              value={storyCaption}
              onChange={(e) => setStoryCaption(e.target.value)}
              disabled={loadImg}
              className="newStorie__storie"
              cols="30"
              rows="10"
            ></textarea>
          )}
        </div>
      </div>
    </form>
  );
};

export default NewStorie;
