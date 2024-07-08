

title = 'Surface significance test'

framec='OliveDrab'

v[0] = ['sign']
t[0] = ['Significance']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL','Norway','Sweden','Finland','below_300m','above_1000m','Denmark','BalticStates','Scandinavia','FinlandSouth','FinlandNorth','MCPATCH1gt075','MCPATCH2gt075','MCVEGP1gt075','MCVEGP2gt075'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','DD','TT','TTHA','TN','TX','TD','RH','QQ','TDD','NN','PE1','PE12','VI']
t[4] = ['Mslp','U10m','Max Wind Gust','Wind direction','T2m','T2m, height corr.','Min T2m','Max T2m','Td2m','Rh2m','Q2m','Td2m deficit','Cloud cover','1h Precipitation','12h Precipitation','Visibility']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['cy46h_SURFEX_offline_SamuelPR_cy46h_SURFEX_offline_SamuelPR_RSL','cy46h_SURFEX_offline_SamuelPR_cy46h_SURFEX_offline_SamuelPR_RSL_forest','cy46h_SURFEX_offline_SamuelPR_cy46h_sfxoff_SamPR_RSL_lowvegoff']
t[6] = ['cy46h_SURFEX_offline_SamuelPR_cy46h_SURFEX_offline_SamuelPR_RSL','cy46h_SURFEX_offline_SamuelPR_cy46h_SURFEX_offline_SamuelPR_RSL_forest','cy46h_SURFEX_offline_SamuelPR_cy46h_sfxoff_SamPR_RSL_lowvegoff']
v[7] = ['ALL'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','l','t','t','l','l','t','l']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison between       <br>      '; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
