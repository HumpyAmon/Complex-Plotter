

class co_math{

    static add(z1,z2)//z1+z2
    {
        return [z1[0] + z2[0],z1[1] + z2[1]];
    }

    static sub(z1,z2)//z1-z2
    {
        return [z1[0] - z2[0],z1[1] - z2[1]];
    }

    static re_mul(z1,real)//z*R
    {
        return[z1[0]*real,z1[1]*real];
    }

    static mul(z1,z2)//z1*z2
    {
            return [z1[0]*z2[0]-z1[1]*z2[1],z1[0]*z2[1]+z1[1]*z2[0]];   
    }

    static re_div(z1, real)//z1/R
    {
        return[z1[0]/real,z1[1]/real]
    }

    static div(z1,z2)//z1/z2
    {

        if(z2[0]!=z2[1]){
            
            var denominator=z2[0]*z2[0]-z2[1]*z2[1];
            return [(z1[0]*z2[0]+z1[1]*z2[1])/denominator,(z1[1]*z2[0]-z1[0]*z2[1])/denominator];
        }
        if((z1[0]==0&&z1[1]==0)||z2[0]==0) return [NaN,NaN]
        return [Infinity,Infinity];
    }

    static abs(z)//absolute z
    {
        return Math.sqrt(z[0]*z[0]+z[1]*z[1]);
    }

    static arg(z)//argument Z
    {
        if(z[0]==0&&z[1]==0){
            return NaN;
        }

        if(z[0]==0&&z[1]!=0){
            if(z[1]>0) return Math.PI/2;
            if(z[1]<0) return 3*Math.PI/2;
        }

        if(z[0]!=0&&z[1]==0){
            if(z[0]>0) return 0;
            if(z[0]<0) return Math.PI;
        }

        if(z[0]>0&&z[1]>0){
            return Math.atan2(z[1],z[0]);
        }

        if(z[0]>0&&z[1]<0){
            return 2*Math.PI-Math.atan2(-z[1],z[0]);
        }

        if(z[0]<0&&z[1]>0){
            return Math.PI-Math.atan2(z[1],-z[0]);
        }

        if(z[0]<0&&z[1]<0){
            return Math.atan2(-z[1],-z[0])+Math.PI;
        }
    }

    static pow(z,power)//z^R
    {
        var absz=this.abs(z);
        var argz=this.arg(z);

        var absres=Math.pow(absz,power);
        var argres=argz*power;

        return [absres*Math.cos(argres),absres*Math.sin(argres)]
    }

    static exp(z)//e^z
    {
        var tmp = Math.exp(z[0]);
        return [Math.cos(z[1])*tmp, Math.sin(z[1])*tmp]
    }

    static zpow(z1,z2)//z1^z2
    {
        return this.exp(this.mul(z1,this.log(z2)));
    }

    static log(z)//ln(z)
    {
        return [Math.log(this.abs(z)), this.arg(z)]
    }

    static zlog(z1,z2)//log z1(z2)
    {
        return this.div(this.log(z2),this.log(z1));
    }

    static sin(z)
    {
        var result=this.sub(this.exp([-z[1],z[0]]),this.exp([z[1],-z[0]]));
        return [result[1]/2,-result[0]/2];
    }

    static cos(z){
        var result=this.add(this.exp([-z[1],z[0]]),this.exp([z[1],-z[0]]));
        return [result[0]/2,result[1]/2];
    }

    static tan(z){
        var exp1=this.exp([-z[1],z[0]]);
        var exp2=this.exp([z[1],-z[0]]);
        var result=this.div(this.sub(exp1,exp2),this.add(exp1,exp2))
        return [result[1],-reuslt[0]]
    }

    static ctan(z){
        var exp1=this.exp([-z[1],z[0]]);
        var exp2=this.exp([z[1],-z[0]]);
        var result=this.div(this.add(exp1,exp2),this.sub(exp1,exp2))
        return [-result[1],result[0]]
    }

    static asin(z){
        var result=this.mul(z,z);
        result=[1-result[0],-result[1]];
        result= this.pow(result,0.5);
        result=[result[0]-z[1],result[1]+z[0]];
        result=this.log(result);
        return [result[1],-result[0]];
    }

    static asin(z){
        var result=this.mul(z,z);
        result=[result[0]-1,result[1]];
        result= this.pow(result,0.5);
        result=[result[0]+z[0],result[1]+z[1]];
        result=this.log(result);
        return [-result[1],result[0]];
    }

    static atan(z){
        var result=this.div([-z[1]+1,z[0]+1],[z[1]+1,-z[0]+1]);
        result=this.log(result);
        return [result[1]/2,-result[0]/2];
    }

    static actan(z){
        var result=this.div([-z[1]+1,z[0]+1],[-z[1]-1,z[0]-1]);
        result=this.log(result);
        return [-result[1]/2,result[0]/2];
    }
    
    static sinh(z){
        var result=this.sub(this.exp(z),this.exp([-z[0],-z[1]]));
        return [result[0]/2,result[1]/2];
    }

    static cosh(z){
        var result=this.add(this.exp(z),this.exp([-z[0],-z[1]]));
        return [result[0]/2,result[1]/2];
    }

    static tanh(z){
        var exp1=this.exp(z);
        var exp2=this.exp([-z[0],-z[1]]);
        return this.div(this.sub(exp1,exp2),this.add(exp1,exp2));
        
    }

    static ctanh(z){
        var exp1=this.exp(z);
        var exp2=this.exp([-z[0],-z[1]]);
        return this.div(this.add(exp1,exp2),this.sub(exp1,exp2));
    }
}
