package com.example.move.pojo;


import com.baomidou.mybatisplus.annotation.TableId;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarProjectMove {

    /**
     * 汽车id
     */
    @TableId
    private Integer carId;

    /**
     * 车辆名称
     */
    private String carName;

    /**
     * 车牌号
     */
    private String carNumber;

    /**
     * 车辆头像
     */
    private byte[] carImage;
    /**
     * 车辆使用起始时间
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date carStartTime;

    /**
     * 车辆使用截止时间
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date carEndTime;

    /**
     * 姓名
     */
    private String name;
}
