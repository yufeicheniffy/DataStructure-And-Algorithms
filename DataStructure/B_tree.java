public class Btree(int order){
    int order=this.order;
    float[order] values=new float[];
    Btree[order+1] pointers=new Btree[];
    int nodes=0;

    public Btree(){
        for(int i;i<order;i++){
            values[i]=null;
            pointers[i]=null;
        }
        pointers[order+1]=null;
        nodes=0;
    }
    public boolean insert(value){
        if(nodes==0){
            values[0]=value;
        }
        else if (nodes+1<=order){
                int insertindex=0;
                while(value>values[insertindex]) insertindex+=1;
                for(int j=nodes;j>insertindex;j--){
                    values[j]=values[j-1];
                }
                values[insertindex]=value;
        }
        else{//split
            
        }
    }
}