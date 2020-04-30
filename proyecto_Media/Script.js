function Movie_OnStart(){SoundPlay ("musica", true);
VideoSetVolume("video",0);

}

function Frame__0_0(ID){Pause();


}

function Frame__1_0(ID){Pause();


}

function BOTONIRSONIDO_OnClick(){GotoSceneName("AUDIO");
SoundPlay("click",false);
}

function SONIDODELVIDEO_OnClick(){VideoSetVolume("video",Volumen:100);
SoundPlay("click",false);
}

function SONIDODELVIDEO_OnRelease(){VideoSetVolume("video",Volumen:0);
SoundPlay("click",false);
}

function PAUSARVIDEO_OnClick(){VideoPause("video");
SoundPlay("click",false);

}

function PAUSARVIDEO_OnRelease(){VideoResume("video");
SoundPlay("click",false);
}

function HotSpot1_OnClick(){VideoPause("video");

}

function BOTONIRVIDEO_OnClick(){GotoSceneName("VIDEO");
SoundPlay("click",false);
}

function MUSICAREPRODUCIENDO_OnClick(){SoundPause("musica");
SoundPlay("click",false);
}

function MUSICAREPRODUCIENDO_OnRelease(){SoundResume("musica");
SoundPlay("click",false);
}

