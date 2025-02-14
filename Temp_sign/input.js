

title = 'Temp significance test'

framec='OliveDrab'

v[0] = ['sign']
t[0] = ['Significance']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL'] ;
t[3] = v[3] ;
v[4] = ['TT','TD','FF','DD','FI','RH','QQ']
t[4] = ['Temperature','Dew point T','Wind speed','Wind direction','Geopotential','Relative humidity','Specific humidity']
v[5] = ['925','850','700','500','300','200','150','100','50']
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['SamuelPR_SamuelPR_RSL','SamuelPR_SamuelPR_RSL_forest','SamuelPR_SamPR_RSL_lowvegoff']
t[6] = ['SamuelPR_SamuelPR_RSL','SamuelPR_SamuelPR_RSL_forest','SamuelPR_SamPR_RSL_lowvegoff']
v[7] = ['ALL','00','12'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','l','t','t','l','l','t','l']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Temp/'
ext='1.png'
help = 'Observation verification comparison between       <br>      '; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat']
my_con=['All','Temp/quality_[1].html','Temp/TABLE_LL_[1]_[3].html']
